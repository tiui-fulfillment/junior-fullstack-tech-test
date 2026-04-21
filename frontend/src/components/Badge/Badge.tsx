import './Badge.css';

interface Props {
    label: string;
    variant: 'success' |'danger';
}

export default function Badge({ label, variant }: Props) {
    return <span className={`badge badge-${variant}`}>{label}</span>;
}