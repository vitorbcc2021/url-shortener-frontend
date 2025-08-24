import './UrlList.css'
import EditButton from './EditButton'
import DeleteButton from './DeleteButton'

export default function UrlList({ urls, onUrlEdited, onUrlDeleted }) {
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
                                    onEditSuccess={(updatedUrl) => onUrlEdited?.(updatedUrl)}
                                />
                                <DeleteButton
                                    shortUrl={item.shortUrl}
                                    onDeleteSuccess={(deletedUrlId) => onUrlDeleted?.(deletedUrlId)}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}