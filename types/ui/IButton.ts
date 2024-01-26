type ButtonType = "submit" | "reset" | "button" | undefined

export interface IButton {
    children: React.ReactNode
    style: object
    onClick?: () => void
    disabled?: boolean
    // type?: ButtonType

}