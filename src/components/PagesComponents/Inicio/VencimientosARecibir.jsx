
import Card from './Card/Card'

export default function VencimientosARecibir() {
    return (
        <section>
            <h2>Próximos vencimientos a recibir</h2>
            <div>
                <Card title='Préstamo X' cuota='4/12' fecha='25/08/2024' />
                <Card title='Préstamo Y' cuota='2/6' fecha='26/08/2024' />
            </div>
        </section>
    )
}
