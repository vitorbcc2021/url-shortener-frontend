import './UrlList.css'

export default function UrlList({ urls }) {
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
                                <button className="edit-btn">Editar</button>
                                <button className="delete-btn">Excluir</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}