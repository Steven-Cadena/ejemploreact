import paisaje from './../../assets/images/paisaje.jpg';

function SumarNumeros(){

    var imgsize = {
        width: "150px", heigth:"150px"
    };
    //método
    const Suma = (num1, num2) =>{
        var resultado = num1 + num2;
        console.log(resultado);
    }

    return(
        <div>
            <h1>Resultado Total </h1>
            <img src={paisaje} className="App-logo" style={imgsize}/>
            <button onClick={ () => Suma(7,7)}>
                Suma
            </button>
        </div>
    );
}

export default SumarNumeros;