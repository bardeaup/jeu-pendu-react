import * as React from 'react'
import PropTypes from 'prop-types'

export interface ICheckPosition {
     position: number;
     letter: string;
}

state = {
    nbreDeLettresTrouvees : 0,
    nbreDeLettresFausses : 0,
    mot : ''
}

const Form = ({ nbreDeLettresTrouvees: number, nbreDeLettresFausses: number }) => {

}
Form.propTypes = {
    nbreDeLettresTrouvees: PropTypes.number.isRequired,
    nbreDeLettresFausses: PropTypes.number.isRequired,
}


var mots = [
    "Abeille",
    "Baleine",
    "Cachalot",
    "Cerf",
    "Chat",
    "Chèvre",
    "Chien",
    "Cigale",
    "Coq",
    "Cygne",
    "Dauphin",
    "Dindon",
    "Dromadaire",
    "Girafe",
    "Gorille",
    "Grenouille",
    "Hérisson",
    "Hyène",
    "Hippopotame",
    "Koala",
    "Kangourou",
    "Lama",
    "Lézard",
    "Lièvre",
    "Lion",
    "Loup",
    "Morse",
    "Ours",
    "Otarie",
    "Panda",
    "Paresseux",
    "Pélican",
    "Phoque",
    "Poisson",
    "Grenouille",
    "Requin",
    "Rhinocéros",
    "Sanglier",
    "Sauterelle",
    "Serpent",
    "Suricate",
    "Tapir",
    "Toucan",
    "Tigre",
    "Zèbre"
]