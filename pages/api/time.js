async function Time(request, response) {
    const dynamicDate = new Date();
    const apiSecretLang = process.env.FERIADOS_API_LANG;
    const apiFeriados = await fetch(`https://date.nager.at/api/v3/publicholidays/2025/${apiSecretLang}`);
    
    const apiFeriadosJson = await apiFeriados.json();
    const dataFeriado = apiFeriadosJson[0].date
    const nomeFeriado = apiFeriadosJson[0].localName

    response.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate');
    response.json({
        date: dynamicDate.toGMTString(),
        data: dataFeriado,
        nome: nomeFeriado
    })
}

export default Time;