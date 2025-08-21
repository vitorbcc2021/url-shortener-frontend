import { useState } from 'react'
import './ActionButtons.css'
import { DELETE_URL } from '../../../variables'

export default function DeleteButton({ shortUrl, onDeleteSuccess }) {
    const [isDeleting, setIsDeleting] = useState(false)

    async function handleDelete() {
        if (!window.confirm('Tem certeza que deseja excluir esta URL?')) {
            return
        }

        setIsDeleting(true)
        try {
            const token = localStorage.getItem('jwtToken')
            
            const response = await fetch(`${DELETE_URL}${shortUrl}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })

            if (!response.ok) throw new Error('Falha ao deletar URL')

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