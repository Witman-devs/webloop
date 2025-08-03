import logo from '../assets/logos/newsLogo.png';

export default function CompanyLogo({}){
    return (
        <div style={{
            width: '100px',
            height: '50px',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <img
                src={logo}
                alt="News Logo"
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    fontSize: '1em'
                }}
            />
        </div>
    )
} 