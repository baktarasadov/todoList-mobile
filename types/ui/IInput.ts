export interface IInput {
    id: string;
    // type: string
    style: object
    value: string
    placeholder: string
    onChange: (text: string) => void;
}