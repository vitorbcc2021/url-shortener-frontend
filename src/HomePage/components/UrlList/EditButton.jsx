import { useState } from 'react'
import './ActionButtons.css'

export default function EditButton({ item, onEditSuccess, enterEditMode, onCancel }) {
    const [isEditing, setIsEditing] = useState(false)

    function startEditMode() {
        setIsEditing(true)
        enterEditMode?.()
    }

    function handleSave() {
        onEditSuccess?.(item)
        setIsEditing(false)
    }

    function handleCancel() {
        setIsEditing(false)
        onCancel?.()
    }

    if (isEditing) {
        return (
            <div className="edit-mode">
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
        <button className="edit-btn" onClick={startEditMode}>
            Editar
        </button>
    )
}