import { useState } from 'react'
import './ActionButtons.css'
import { apiService } from '../../../services/ApiService'

export default function DeleteButton({ shortUrl, onDeleteSuccess }) {
    const [isDeleting, setIsDeleting] = useState(false)

    async function handleDelete() {
        if (!window.confirm('Tem certeza que deseja excluir esta URL?')) {
            return
        }

        setIsDeleting(true)
        try {
            await apiService.deleteUrl(shortUrl)

            onDeleteSuccess?.(shortUrl)
            alert('URL excluída com sucesso!')

        } catch (error) {
            console.error('Erro:', error)
            alert('Erro ao excluir URL')
        } finally {
            setIsDeleting(false)
        }
    }

    return (
        <button className="delete-btn" onClick={handleDelete} disabled={isDeleting}>
            {isDeleting ? 'Excluindo' : 'Excluir'}
        </button>
    )
}