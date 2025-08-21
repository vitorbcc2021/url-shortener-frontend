import './UrlList.css'
import EditButton from './EditButton'
import DeleteButton from './DeleteButton'

export default function UrlList({ urls, onUrlEdited, onUrlDeleted }) {
    function handleDeleteSuccess(deletedUrlId) {
        onUrlDeleted?.(deletedUrlId)
    }

    function handleEditSuccess(updatedUrl) {
        onUrlEdited?.(updatedUrl)
    }

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
                                    onEditSuccess={handleEditSuccess}
                                />
                                <DeleteButton
                                    shortUrl={item.shortUrl}
                                    onDeleteSuccess={handleDeleteSuccess}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}