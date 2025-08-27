import './UrlList.css'
import EditButton from './EditButton'
import DeleteButton from './DeleteButton'
import { useEffect, useState } from 'react'
import useAuth from '../../../contexts/AuthContext'
import { apiService } from '../../../services/ApiService'

export default function UrlList({ urls, syncUrls, onUrlDeleted, onUrlEdited }) {
    const { isLoggedIn } = useAuth()
    const [editingId, setEditingId] = useState(null)
    const [editingUrl, setEditingUrl] = useState('')

    function enterEditMode(item) {
        setEditingId(item._id)
        setEditingUrl(item.originalUrl)
    }

    async function saveEditedUrl(url) {
        try {
            const updatedUrl = await apiService.updateUrl(url.shortUrl, editingUrl)

            if (updatedUrl) {
                onUrlEdited?.(updatedUrl)
                setEditingId(null)
                alert('URL atualizada com sucesso!')
            }

        } catch (error) {
            console.log('Erro:', error)
            alert('Erro ao editar URL')
        }
    }

    function cancelEditUrl() {
        setEditingId(null)
    }

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
                                {
                                    editingId === item._id ?
                                        <input
                                            type="text"
                                            value={editingUrl}
                                            onChange={(e) => setEditingUrl(e.target.value)}
                                            className="url-edit-input"
                                            autoFocus
                                        />
                                        :
                                        <p>{item.originalUrl}</p>
                                }
                            </td>
                            <td>
                                <p>{item.shortUrl}</p>
                            </td>
                            <td className="actions">
                                <EditButton
                                    item={item}
                                    onEditSuccess={saveEditedUrl}
                                    enterEditMode={() => enterEditMode(item)}
                                    onCancel={cancelEditUrl}
                                />
                                {
                                    editingId === item._id ?
                                        null
                                        :
                                        <DeleteButton
                                            shortUrl={item.shortUrl}
                                            onDeleteSuccess={onUrlDeleted}
                                        />}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}