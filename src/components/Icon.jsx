import person from '../assets/icons/person.svg?react'
import logout from '../assets/icons/logout.svg?react'

const iconComponents = {
    person: person,
    logout: logout
}

export default function Icon({
    name,
    size = 24,
    color = 'currentColor',
    className = '',
    ...props
}) {
    const IconComponent = iconComponents[name] || FallbackIcon

    return (
        <IconComponent
            width={size}
            height={size}
            fill={color}
            className={`icon ${className}`}
            {...props}
        />
    )
}

function FallbackIcon({ size = 24, color = 'currentColor', ...props }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} {...props}>
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
        </svg>
    )
}