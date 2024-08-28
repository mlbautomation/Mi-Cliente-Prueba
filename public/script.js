const getData = async () => {
    
    /* Para este ejemplo estamos accediendo a una información
    que se encuentra en el endpoint con puerto 8080, pero
    si este servidor esta corriendo en el puerto 8081.
    
    En el ejemplo de ...Curso-GO\04-Go-Server\04-Servidor-ECHO\11-ServerCORS.go
    el servidor esta corriendo en el puerto 8080, pero para que otro dominio
    acceda a nuestro servicio debemos usar el CORS.

    Ahora estoy haciendo la prueba con puertos porque estoy en el
    localhost, pero cuando cambie de mlbautomation.com tambien tendré
    que hacer un procedimiento similar usando CORS para habilitarlo.
    */
    
    const req = await fetch("http://localhost:8080/data")
    const data = await req.json()
    drawData(data)
}

const drawData = data => {
    data.forEach(e => {
        const html = `<div>${e.name}</div>`
        content.insertAdjacentHTML('beforeend', html)
    });
}

obtener.addEventListener('click', e => {
    e.preventDefault()
    getData()
})