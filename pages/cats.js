import React from "react";
import axios from "axios";


class Cats extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      catImg: props.img //props.img para que comience la pagina con una imagen ya cargada
    }
  }



  static async getInitialProps({ req, query }) {   // para que cargar apenas cargue la pagina

    const cats = await axios.get("https://api.thecatapi.com/v1/images/search")
    return {
      img: cats.data[0].url
    }



  }

  async handleClick(e) {
    console.log(e.target.name)
    const cats = await axios.get("https://api.thecatapi.com/v1/images/search")
    console.log(cats)
    this.setState({
      catImg: cats.data[0].url
    })

  }


  async handleCat(e) {
    console.log(e.target.name)
    const name = e.target.name

    const gatitos = await axios.get(`https://api.thecatapi.com/v1/images/search?category_ids=${name}`)
    console.log(gatitos)
    this.setState({
      catImg: gatitos.data[0].url
    })
  }

  render() {

    return (

      <div className="wrap">
        <div className="group_buttons">
          <h2>RANDOM CATS</h2>
          <button className="button" name="gatitos" onClick={(e) => this.handleClick(e)}>gatito</button>
          <button className="button" name="1" onClick={(e) => this.handleCat(e)}>gatitos con gorros</button>
          <button className="button" name="4" onClick={(e) => this.handleCat(e)}>gatitos con anteojos</button>
          <button className="button" name="2" onClick={(e) => this.handleCat(e)}>gatitos espaciales</button>
        </div>
        <br />


        <img className="box" src={this.state.catImg}></img>

        <style jsx>{`

          h2{
            text-align:center;
           
          }
    
          .button{
            width: 120px;
            height:60px;
            margin:10px;
            padding:0;
            border-radius: 5px

          }
                  
          .box{
            width:400px;
            height: 500px;
            background-image:initial;
            margin:100px;
          

            // style={{ width: 400, height: 500 }}
          }

          .wrap{
            display: flex;
            height: 100vh;
            justify-content: center;
            align-items: center;
            flex-direction:column

          }
          `}

        </style>
      </div>


    )
  }
}

export default Cats