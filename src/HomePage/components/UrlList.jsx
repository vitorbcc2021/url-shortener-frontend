import './UrlList.css'

const UrlList = ({ urls }) => {
    return (
        <div className="url-list">
            <h2>Suas URLs encurtadas</h2>
            <table className="url-table">
                <thead>
                    <tr>
                        <th>URL Original</th>
                        <th>URL Curta</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {urls.map((item) => (
                        <tr key={item.id}>
                            <td>
                                <a href={item.original} target="_blank" rel="noopener noreferrer">
                                    {item.original}
                                </a>
                            </td>
                            <td>
                                <a href={item.short} target="_blank" rel="noopener noreferrer">
                                    {item.short}
                                </a>
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

export default UrlList