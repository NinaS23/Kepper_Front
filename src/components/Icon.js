function Icon({ typeInput, setTypeInput }) {

    if (typeInput === "password") {
        return <ion-icon
            onClick={() =>  setTypeInput("text")}
            name="eye-off-outline">
        </ion-icon>
    } else {
        return <ion-icon
            onClick={() =>  setTypeInput("password")}
            name="eye-outline">
        </ion-icon>
    }


}
export default Icon;