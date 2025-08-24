import './UrlList.css'
import EditButton from './EditButton'
import DeleteButton from './DeleteButton'
import { useState, useEffect } from 'react'
import useAuth from '../../../contexts/AuthContext'
import { apiService } from '../../../services/ApiService'

export default function UrlList() {
    const [urls, setUrls] = useState([])
    const { isLoggedIn } = useAuth()


    function handleUrlDeleted(deletedUrlId) {
        setUrls(prevUrls => prevUrls.filter(url => url._id !== deletedUrlId))
    }

    function handleUrlEdited(updatedUrl) {
        setUrls(prevUrls => prevUrls.map(url => url._id === updatedUrl._id ? updatedUrl : url))
    }


    useEffect(() => {
        async function fetchUrls() {
            try {
                const response = await apiService.getUrls()
    
                if (response.ok) {
                    const data = await response.json()
                    setUrls(data)
                } else {
                    setUrls([])
                }
            } catch (error) {
                console.log(error)
            }
        }

        if (isLoggedIn) fetchUrls()
            
    }, [isLoggedIn])

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
                                    onEditSuccess={handleUrlEdited}
                                />
                                <DeleteButton
                                    shortUrl={item.shortUrl}
                                    onDeleteSuccess={handleUrlDeleted}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}