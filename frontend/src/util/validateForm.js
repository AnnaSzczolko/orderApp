 export function validateForm(data){
    const errors = {}
    if (data.name.trim().length < 3 ){
        errors.name = 'Name must be at least 3 characters'
    }
    if (data.surname.trim().length < 3 ){
        errors.surname = 'Surname must be at least 3 characters'
    }
    if (data.street.trim().length < 3 ){
        errors.street = 'Street must be at least 3 characters'
    }
    if (data.city.trim().length < 3 ){
        errors.city = 'City must be at least 3 characters'
    }

     const postalRegex = /^[0-9]{2}-[0-9]{3}$/

     if(!postalRegex.test(data['postal-code'])){
        errors['postal-code'] = "Postal code must be in format 00-000"
     }

     return errors
}

