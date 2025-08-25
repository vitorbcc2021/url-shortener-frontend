import './UrlList.css'
import EditButton from './EditButton'
import DeleteButton from './DeleteButton'
import { useEffect } from 'react'
import useAuth from '../../../contexts/AuthContext'
import { apiService } from '../../../services/ApiService'

export default function UrlList({ urls, syncUrls, onUrlDeleted, onUrlEdited }) {
    const { isLoggedIn } = useAuth()

    useEffect(() => {
        async function fetchUrls() {
            try {
                const data = await apiService.getUrls()
                syncUrls?.(data)
            } catch (error) {
                console.log(error)
                syncUrls?.([])
            }
        }

        if (isLoggedIn) fetchUrls()

    }, [isLoggedIn, syncUrls])

    return (
        <div className="url-list">
            <h2>Your shortened URLs</h2>
            <table className="url-table">
                <thead>
                    <tr>
                        <th>Original URL</th>
                        <th>Short URL</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {urls.map((item) => (
                        <tr key={item._id}>
                            <td>
                                <p>{item.originalUrl}</p>
                            </td>
                            <td>
                                <p>{item.shortUrl}</p>
                            </td>
                            <td className="actions">
                                <EditButton
                                    url={item}
                                    onEditSuccess={onUrlEdited}
                                />
                                <DeleteButton
                                    shortUrl={item.shortUrl}
                                    onDeleteSuccess={onUrlDeleted}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}