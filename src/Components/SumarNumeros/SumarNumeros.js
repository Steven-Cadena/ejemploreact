function SumarNumeros(props){
    const {num1,num2} = props;
    const resultado = num1 + num2;
    //método
    const Suma = (num1, num2) =>{
        var resultado = num1 + num2;
        console.log(resultado);
    }

    return(
        <div>
            <h1>Resultado Total </h1>
            <button onClick={ () => Suma(7,7)}>
                Suma
            </button>
        </div>
    );
}

export default SumarNumeros;