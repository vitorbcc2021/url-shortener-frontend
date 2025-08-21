import { useState } from 'react'
import './ActionButtons.css'
import { EDIT_URL } from '../../../variables'

export default function EditButton({ url, onEditSuccess }) {
    const [isEditing, setIsEditing] = useState(false)
    const [editedUrl, setEditedUrl] = useState(url.originalUrl)

    function handleEdit() {
        setIsEditing(true)
    }

    async function handleSave() {
        try {
            const token = localStorage.getItem('jwtToken')

            const response = await fetch(`${EDIT_URL}${url.shortUrl}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ newUrl: editedUrl })
            })

            if (!response.ok) throw new Error('Falha ao editar URL')

            const updatedUrl = await response.json()

            onEditSuccess?.(updatedUrl)
            setIsEditing(false)
            alert('URL atualizada com sucesso!')

        } catch (error) {
            console.error('Erro:', error)
            alert('Erro ao editar URL')
        }
    }

    const handleCancel = () => {
        setEditedUrl(url.originalUrl)
        setIsEditing(false)
    }

    if (isEditing) {
        return (
            <div className="edit-mode">
                <input
                    type="text"
                    value={editedUrl}
                    onChange={(e) => setEditedUrl(e.target.value)}
                    className="url-edit-input"
                />
                <button className="save-btn" onClick={handleSave}>
                    Salvar
                </button>
                <button className="cancel-btn" onClick={handleCancel}>
                    Cancelar
                </button>
            </div>
        )
    }

    return (
        <button className="edit-btn" onClick={handleEdit}>
            Editar
        </button>
    )
}