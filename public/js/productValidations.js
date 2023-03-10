window.onload = function(){
    
    let form = document.querySelector('.formBody');
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault()
        let errors = [] 
        
        let flagForm = document.getElementById('flagForm'); 
        let refCar = document.getElementById('refCar');
        let brandCar = document.getElementById('brandCar');
        let provinceCar = document.getElementById('provinceCar');
	    let categoryTypeCar = document.getElementById('categoryTypeCar');
        let modelYearCar = document.getElementById('modelYearCar');
        let mileageCar = document.getElementById('mileageCar');
        let priceCar = document.getElementById('priceCar');
        let discountCar = document.getElementById('discountCar');
        let imagesCar = document.getElementById('imagesCar');
        
        if (refCar.value == "") {
            errors.push("La referencia del vehículo no puede estar vacía.");
            refCar.classList.add('is-invalid');
        } else if (refCar.value.length < 20) {
            errors.push("La referencia debe tener por lo menos 20 caracteres.");
            refCar.classList.add('is-invalid');
        } else refCar.classList.remove('is-invalid');
        
        

        if (brandCar.value == "") {
            errors.push("La marca del vehículo no puede estar vacía.");
            brandCar.classList.add('is-invalid');
        } else if (brandCar.value.length < 3) {
            errors.push("La marca debe tener por lo menos 3 caracteres.");
            brandCar.classList.add('is-invalid');
        } else brandCar.classList.remove('is-invalid');


        if (provinceCar.value == "") {
            errors.push("Seleciona la provincia en que se encuentra ubicado el vehículo.");
            provinceCar.classList.add('is-invalid');
        } else provinceCar.classList.remove('is-invalid');


        if (categoryTypeCar.value == "") {
            errors.push("Seleciona un categoría del vehículo.");
            categoryTypeCar.classList.add('is-invalid');
        } else categoryTypeCar.classList.remove('is-invalid');


        if (modelYearCar.value == "") {
            errors.push("Seleciona el modelo del vehículo.");
            modelYearCar.classList.add('is-invalid');
        } else modelYearCar.classList.remove('is-invalid');
        

        if (mileageCar.value == "") {
            errors.push("Introduce los km recorridos por el vehículo.");
            mileageCar.classList.add('is-invalid');
        } else if (isNaN(mileageCar.value)) {
            errors.push("Solo se permiten valores numéricos en los Km.");
            mileageCar.classList.add('is-invalid');
        } else if (Number.isInteger(mileageCar.value)) { 
            errors.push("Solo se permiten valores numéricos enteros en los Km.");
            mileageCar.classList.add('is-invalid');
        } else mileageCar.classList.remove('is-invalid');


        if (priceCar.value == "") {
            errors.push("Introduce el pecio de venta del vehículo sin descuento.");
            priceCar.classList.add('is-invalid');
        } else if (isNaN(priceCar.value)) {
            errors.push("Solo se permiten valores numéricos para los precios.");
            priceCar.classList.add('is-invalid');
        } else mileageCar.classList.remove('is-invalid');
        

        if (discountCar.value == "") {
            errors.push("Introduce el % de descuento, en caso de no tener descuento introduce 0 (cero).");
            discountCar.classList.add('is-invalid');
        } else if (isNaN(discountCar.value)) {
            errors.push("Solo se permiten valores numéricos (sin %).");
            discountCar.classList.add('is-invalid');
        } else discountCar.classList.remove('is-invalid');


        if (!imagesCar.value == "") {
            let acceptedExtensions = ['jpg', 'jpeg', 'png', 'gif'];
            let notAccepted = false;
            for(let i=0; i < imagesCar.files.length && !notAccepted; i++) {
                // Seperar tipo de extension del archivo por / y obtiene la extensión, luego busca si esta permitido dentro del array accept
                if (!acceptedExtensions.includes(imagesCar.files[i].type.split('/').pop().toLowerCase()))
                    notAccepted = true;
            }

            if (notAccepted) {
                errors.push(`Las extensiones de archivos permitidos son ${acceptedExtensions.join(', ')}`);
                imagesCar.classList.add('is-invalid');
            }
        } else if (flagForm.value == 'Create-Product') {
                errors.push("Tienes que subir por lo menos una imagen del vehículo.");
                imagesCar.classList.add('is-invalid');
        } else if(flagForm.value == 'Edit-Product') {
            let imgEditForm = document.querySelectorAll(".imgEditForm");
            if(imgEditForm.length < 1 && imagesCar.value == "") {
                errors.push("Tienes que subir por lo menos una imagen del vehículo.");
                imagesCar.classList.add('is-invalid');
            }
        }

        if (errors.length > 0) {
            let ulErrors = document.getElementById('ulErrors')
            ulErrors.classList.add("alert-warning")
            ulErrors.innerHTML = ""
            for (let i = 0; i < errors.length; i++) {
                ulErrors.innerHTML += `<li> ${errors[i]} </li>`
            }
            Swal.fire(
                'Cuidado!',
                'Verifica los errores',
                'error'
            )
        } else {
            form.submit();
            /* let body = {
                title: title.value,
                rating: rating.value,
                awards: awards.value,
                release_date: release_date.value,
                length: length.value,
                genre_id: genre_id.value
            }
            const respuesta = await fetchCreate(body)
            if (respuesta.meta.status == 200) {
                Swal.fire(
                    'Todo ok!',
                    'pelicula guardada!',
                    'success'
                )
            }
            else {
                Swal.fire(
                    'Cuidado!',
                    'Hubo un error al cargar la pelicula',
                    'error'
                )
            } */
            
        }

    })

    /* async function fetchCreate(model) {
        const res = await fetch('/api/movies/create', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(model)
        })
        let info = await res.json()
        return info
    } */
}