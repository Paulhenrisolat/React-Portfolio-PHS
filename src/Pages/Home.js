import Button from '../Components/Button';

export default function Home(){
    return(
        <div className="home">
            <h1 className='home-title'>Paul-Henri Solat</h1>
            <div className='home-desc'>Welcome to my React.Js Portfolio ^^</div>
            <div className='home-grid'>
                <Button btnLink={"/other"} btnTitle={"Other"} btnImg={`${process.env.PUBLIC_URL}/Images/testImg.png`} btnDesc={"Personal & Professional programing projects"}/>
                <Button btnLink={"/projects"} btnTitle={"Projects"} btnImg={`${process.env.PUBLIC_URL}/Images/testImg.png`} btnDesc={"Personal & Professional programing projects"}/>
                <Button btnLink={"/contact"} btnTitle={"About/Contact"} btnImg={`${process.env.PUBLIC_URL}/Images/testImg.png`} btnDesc={"Personal & Professional programing projects"}/>
            </div>
        </div>
    )
}