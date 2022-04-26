import './App.sass'
import { HeroIllustration, MusicIcon } from './images'

const App = () => {
    return (
        <div className="[ card ] [ bg__n100 br1 ]">
            <HeroIllustration className='[ card__image ]'/>
            <div className="[ card__content ] [ p3 ta__center ] [ grid__flow ]">
                <h2 className='[ fw__900 text__n800 ]'>Order Summary</h2>
                <p>You can now listen to millions of songs, audio books, and podcasts on podcasts on any device anywhere you like!</p>
                <div className="[ flex__row ] [ bg__n200 p2 ta__left ]">
                    <MusicIcon />
                    <div className='[ br2 ]'>
                        <p className='[ fw__900 text__n800 ]'>Annual Plan</p>
                        <p>$59.99/year</p>
                    </div>
                    <button className='[ push__right ] [ link ]' data-type='nude'>Change</button>
                </div>
                <button className='[ button ]' data-type='primary'>Proceed to Payment</button>
                <button className='[ button ]' data-type='nude'>Cancel Order</button>
            </div>
        </div>
    )
}

export default App