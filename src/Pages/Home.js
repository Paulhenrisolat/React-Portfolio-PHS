import Button from '../Components/Button';

export default function Home(){
    return(
        <div className="home">
            <h1 className='home-title'>Accueil</h1>
            <div>Welcome to my React.Js Portfolio ^^</div>
            <div className='home-grid'>
                <Button btnLink={"/projects"} btnTitle={"Projects"} btnImg={"React-Portfolio-PHS/Images/testImg.png"} btnDesc={"Personal & Professional programing projects"}/>
                <Button btnLink={"/projects"} btnTitle={"Projects"} btnImg={"React-Portfolio-PHS/Images/testImg.png"} btnDesc={"Personal & Professional programing projects"}/>
                <Button btnLink={"/projects"} btnTitle={"Projects"} btnImg={"React-Portfolio-PHS/Images/testImg.png"} btnDesc={"Personal & Professional programing projects"}/>
            </div>
        </div>
    )
}