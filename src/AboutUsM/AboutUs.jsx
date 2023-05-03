import zIndex from '@mui/material/styles/zIndex'
import React from 'react'
import "../AboutUsM/AboutUs.css"
const AboutUs = () => {
  return (
    <>
    <div 
    style={{width: '100%', height: '100%', display: "flex", justifyContent: "center", margin: "10px", gap: "20px", marginBottom: "100px" }} >
        <div style={{width:"80%", display: "flex", justifyContent: "center"}} className="left">
            <img style={{width: "584px", height: "730px"}} src='https://cdn.about.puma.com/-/media/images/this-is-puma/quote_yaroslava.jpg?as=1&h=1280&iar=1&w=1024&rev=c890a9430eca4cdb8f301af1c1e1477b&hash=D7F77AEE66F736BB383B8F008D359126'/>
        </div>
        <div style={{display: "flex", flexDirection: "column"}} className="right">
            <div  style={{display: "flex", gap: "20px", opacity: 0.2}} className="image-container">
            <img style={{width: "356px", height: "445px"}} src="https://cdn.about.puma.com/-/media/images/this-is-puma/quote_karsten.jpg?as=1&h=1280&iar=1&w=1024&rev=612e669f616e4929800846128b6865b5&hash=A4E77214D4C15E3D133546F699B7C508" alt="ph1" />
            <img style={{width: "356px", height: "445px"}} src="https://cdn.about.puma.com/-/media/images/this-is-puma/m-11-usain-bolt.jpg?as=1&h=1280&iar=1&w=1024&rev=26626c5179e2457ca67b161b15926f4f&hash=43209AA8157E2C596481BAD957912D4C" alt="ph2" />
            </div>
        <div style={{ width: "80%", display: "flex", flexDirection: "column", paddingLeft: "65px", marginTop:"-35px", fontFamily: "Arial, san-serif"}} className="text-containar">
            <h1 style = {{fontWeight:"100", fontSize: "67px", marginBottom: "36px", marginTop: "-8px"}}>"I SOMETIMES IMAGINE THAT <strong style = {{fontWeight: "700", fontFamily: "Arial, san-serif", fontSize: "67px"}}>I AM A BIRD.</strong></h1>
            <p style={{fontSize: "34px", lineHeight: "36px", fontWeight: "600"}}>YAROSLAVA MAHUCHIKH</p>

        </div>
        <div style={{ display:"flex", marginTop: "-110px", marginLeft: "-110px"}}>
            <button className='prev' style={{height: "72px", width: "72px", backgroundColor: "#fff", border: "0 none", cursor: "pointer", zIndex: "20", fontSize: "40px", fontWeight:"none", color: "black", transition: "0.4s"}}>&#8249;</button>
            <button className='next' style={{height: "72px", width: "72px", backgroundColor: "#fff",  border: "0 none", cursor: "pointer", zIndex: "20",fontSize: "40px", fontWeight:"none", color: "black", transition: "0.4s"}}>&#8250;</button>
        </div>
        </div>
    </div>
    <div style={{maxWidth: "100%", margin: "0 auto", display: "flex", justifyContent: 'center'}} className="image" >
        <img style={{width: "90%", zIndex: "-1"}} src='https://cdn.about.puma.com/-/media/images/this-is-puma/our-sports/our_sport_new.png?as=1&h=800&iar=1&w=1600&rev=c9329a524228411690b7d6be05085a90&hash=6C9E6132924926719943C44CE676E94C'/>
    </div>
    <div style={{maxWidth: "41%", fontFamily: "DIN Pro,Arial,sans-serif",color : "#242b2f", marginLeft: "70px", paddingLeft: "10px",  marginTop: "-135px", padding: "48px 48px 0px 0px",backgroundColor: "white", zIndex: "10"
}} className="text-wrapper">
        <h1 style={{fontSize: '45px', lineHeight: "48px", fontWeight: "600", margin: "0px 0px 24px 0px"}} className='text-wrapper_tittle'>
        OUR SPORTS
        </h1>
        <p style={{fontSize: '18px', lineHeight: "27px", fontWeight: "400", marginBottom: "12px"}} className='text-wrapper_middle'>Share excitement in Teamsports, innovate Golf and bring style into Running and Training and performance into Motorsports. In the light of our FOREVER FASTER mission, we bring a high level of brand heat to sports and elevate PUMA to the next level.
</p>
<div style={{ width: "60%", fontSize: "12px", fontWeight: "500", lineHeight: "12px", letterSpacing: "3.25px", transition: "ease-out 0.4s", margin: "50px 0px"}}>
    <a href="#"><button className="btn">EXPLORE OUR SPORTS</button></a>
</div>
    </div>
    <div>

    </div>
    </>
  )
}

export default AboutUs