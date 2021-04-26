import React from "react";

export const About = () => {
    return (
        <div>
            <h2>Об авторе</h2>
            <p>Аджамян Давид, ПИ19-2</p>
            <p>Тема курсовой работы: информационно-справочная система барбершопа</p>
            <div>
                <a href="https://github.com/davadzh/bluebarber" style={{color: "#fafafa"}} target={"_blank"} >Репозиторий Backend</a>
            </div>

            <div>
                <a href="https://github.com/davadzh/BlueBeardFrontend" target={"_blank"} style={{color: "#fafafa"}}>Репозиторий Frontend</a>
            </div>

        </div>
    );
}