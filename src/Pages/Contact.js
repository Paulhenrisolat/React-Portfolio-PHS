export default function Contact(){
    return(
        <div className="centerTxt">
            <div>
                <h1>Contact</h1>
                <a className="link" href="/React-Portfolio-PHS/CVPHS.pdf" download="PaulHenriSolatCV.pdf">Click here to Download my CV !</a>
            </div>

            <div>
                <embed src="/React-Portfolio-PHS/CVPHS.pdf" width="1500" height="1300" type="application/pdf"></embed>
            </div>
            
        </div>
    )
}