import { NextResponse } from "next/server";
import { TipoUsuario } from "@/types";

export async function POST(request: Request) {
    try {
        const { nome, senha ,email } = await request.json();
        
        console.log("Dados recebidos:", { nome, senha ,email });

        if ( !nome || !senha || !email ) {
            throw new Error("Todos os campos são obrigatórios.");
        }

        const novoCliente: TipoUsuario = { nome, senha ,email };

        const response = await fetch('http://localhost:8080/luminis/usuarios', { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(novoCliente),
        });

        if (!response.ok) {
            let errorData;
            try {
                errorData = await response.json();
            } catch {
                errorData = { message: await response.text() };
            }
            console.error("Erro na API externa:", errorData);
            throw new Error(errorData.message || response.statusText);
        }

        const data = await response.json();
        return NextResponse.json(data, { status: 201 });

    } catch (error) {
        console.error("Erro na função POST:", error);
        return NextResponse.json({ error: "Falha na gravação: " + error }, { status: 500 });
    }
}