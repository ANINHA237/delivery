import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./login.style.js";
import Header from "../../components/header/header.jsx";
import TextBox from "../../components/textbox/textbox.jsx";
import Button from "../../components/button/button.jsx";
import { useState } from "react";

function Login(props) {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    function ProcessarLogin() {
        console.log(email, senha);
    }

    return <View style={styles.container}>
        <Header texto={email} />

        <View style={styles.formGroup}>
            <View style={styles.form}>
                <TextBox label="Email"
                    onChangeText={(texto) => setEmail(texto)}
                    value={email} />
            </View>

            <View style={styles.form}>
                <TextBox label="Senha" isPassword={true}
                    onChangeText={(texto) => setSenha(texto)}
                    value={senha} />
            </View>

            <View style={styles.form}>
                <Button texto="Entrar" onPress={ProcessarLogin} />
            </View>
        </View>

        <View style={styles.footersenhaText}>
        <Text style={styles.footersenhaText}>Esqueceu sua senha?</Text>
        </View>

        <View style={styles.footer}>
            <TouchableOpacity onPress={() => props.navigation.navigate("registro")}>
                <Text style={styles.footerText}>Fazer cadastro</Text>
            </TouchableOpacity>
        </View>
    </View>
}

export default Login;