interface Props {
    items: { key: any; label: string }[]
    active: any
}

export const List = (props: Props) => (
    <ul>
        {props.items.map((item) => (
            <li key={item.key}>{item.label}</li>
        ))}
    </ul>
)
