import './Email.css'

function Email() {

    // const displayEmail = (e) => {
    //     e.target.style.background = '#B07156';
    //     return (
    //         <div>
    //             <h3>klatt.jill@gmail.com</h3>
    //         </div>
    //     )
    // }onMouseEnter={displayEmail}
    return (
        <a id='sticky-email' href='mailto:klatt.jill@gmail.com'>
        <img src='/temail4.jpg' alt='gmail logo'  />
    </a>
    )

}

 export default Email