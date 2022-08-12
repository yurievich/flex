import './header.css'


export default function Header() {

    return(
        <div className="headerContainer">
            <div className="headerChild headerNav">
                <h1 className="navItem moveItem">
                    Header Logo
                </h1>
                <h3 className="navItem">
                    Header Link One
                </h3>
                <h3 className="navItem">
                    Header Link Two
                </h3>
                <h3 className="navItem">
                    Header Link Three
                </h3>
            </div>
            <div className="headerChild2">
                <div className="pageIntro">
                    <h1>This website is okay</h1>
                    <p>This website has an okay subtext thas goes here under the ain title. 
                        It's a smaller font and the color is ower contrast</p>
                    <button className="signInBtn">Sign up</button>
                </div>
                <div className="imagePlaceholder">
                    <p className="imagePlaceholderText">This is placeholder for an image</p>
                </div>
            </div>
        </div>
    )
}