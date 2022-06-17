import Carousel from 'react-bootstrap/Carousel'

export default function Carrouseling() {
    return (
        <>
            <Carousel indicators={false}>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100"
                        src="Appreciation.svg"
                        alt="First slide"
                        height='500'
                    />
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100"
                        src="Blooming.svg"
                        alt="Second slide"
                        height='500'
                    />
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100"
                        src="Gifts.svg"
                        alt="Third slide"
                        height='500'
                    />
                </Carousel.Item>
            </Carousel>

        </>
    )
}