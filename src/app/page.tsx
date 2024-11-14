"use client";

import { useState } from "react";
import { Button, Card, Divider, Select, Typography, Space, Tooltip } from "antd";
import { UserOutlined, CheckCircleOutlined, InfoCircleOutlined, SmileOutlined } from "@ant-design/icons";
import "../app/globals.css"; // Certifique-se de que este arquivo exista e contenha estilos globais

const { Option } = Select;
const { Title, Paragraph, Text } = Typography;

export default function Home() {
  const [formData, setFormData] = useState({
    Gender: "Male",
    family_history_with_overweight: "no",
    FAVC: "no",
    SMOKE: "no",
    SCC: "no",
    CAEC: "Sometimes",
    CALC: "Sometimes",
    MTRANS: "Public_Transportation",
  });

  const handleChange = (value: string, field: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center py-16 px-4 font-sans text-gray-800">
      <Title
        level={1}
        className="mb-4 text-4xl font-bold text-gray-800 tracking-wide text-center"
        style={{ fontFamily: "'Roboto', sans-serif" }}
      >
        Health<span className="text-blue-500">Monitor</span>
      </Title>
      <Paragraph className="text-base text-gray-600 mb-12 text-center max-w-lg leading-relaxed">
        Seu parceiro de monitoramento de saúde. Insira suas informações para obter insights e recomendações de saúde personalizados.
      </Paragraph>

      <Card
        className="w-full max-w-md p-8 shadow-lg rounded-lg bg-white transition duration-300 ease-in-out hover:shadow-2xl"
        style={{ borderRadius: "1.5rem" }}
      >
        <Divider orientation="center" className="font-semibold text-gray-600">
          Detalhes do Paciente
        </Divider>

        <div className="grid grid-cols-1 gap-5">
          <Tooltip title="Selecione o Gênero" placement="top">
            <Select
              defaultValue={formData.Gender}
              onChange={(value) => handleChange(value, "Gender")}
              className="w-full rounded-md shadow-sm border border-gray-300"
              placeholder="Gênero"
              options={[
                { label: "Masculino", value: "Male" },
                { label: "Feminino", value: "Female" },
              ]}
              suffixIcon={<UserOutlined style={{ color: "#007BFF" }} />}
            />
          </Tooltip>

          <Tooltip title="Histórico Familiar de Sobrepeso" placement="top">
            <Select
              defaultValue={formData.family_history_with_overweight}
              onChange={(value) => handleChange(value, "family_history_with_overweight")}
              className="w-full rounded-md shadow-sm border border-gray-300"
              placeholder="Histórico Familiar de Sobrepeso"
              options={[
                { label: "Sim", value: "yes" },
                { label: "Não", value: "no" },
              ]}
              suffixIcon={<InfoCircleOutlined style={{ color: "#007BFF" }} />}
            />
          </Tooltip>

          <Tooltip title="Consome alimentos com alta densidade calórica?" placement="top">
            <Select
              defaultValue={formData.FAVC}
              onChange={(value) => handleChange(value, "FAVC")}
              className="w-full rounded-md shadow-sm border border-gray-300"
              placeholder="FAVC"
              options={[
                { label: "Sim", value: "yes" },
                { label: "Não", value: "no" },
              ]}
              suffixIcon={<InfoCircleOutlined style={{ color: "#007BFF" }} />}
            />
          </Tooltip>

          <Tooltip title="Você fuma?" placement="top">
            <Select
              defaultValue={formData.SMOKE}
              onChange={(value) => handleChange(value, "SMOKE")}
              className="w-full rounded-md shadow-sm border border-gray-300"
              placeholder="Fuma?"
              options={[
                { label: "Sim", value: "yes" },
                { label: "Não", value: "no" },
              ]}
              suffixIcon={<InfoCircleOutlined style={{ color: "#007BFF" }} />}
            />
          </Tooltip>

          <Tooltip title="Consumo de doces (SCC)" placement="top">
            <Select
              defaultValue={formData.SCC}
              onChange={(value) => handleChange(value, "SCC")}
              className="w-full rounded-md shadow-sm border border-gray-300"
              placeholder="SCC"
              options={[
                { label: "Sim", value: "yes" },
                { label: "Não", value: "no" },
              ]}
              suffixIcon={<InfoCircleOutlined style={{ color: "#007BFF" }} />}
            />
          </Tooltip>

          <Tooltip title="Frequência de ingestão alimentar (CAEC)" placement="top">
            <Select
              defaultValue={formData.CAEC}
              onChange={(value) => handleChange(value, "CAEC")}
              className="w-full rounded-md shadow-sm border border-gray-300"
              placeholder="CAEC"
              options={[
                { label: "Às vezes", value: "Sometimes" },
                { label: "Frequentemente", value: "Frequently" },
                { label: "Sempre", value: "Always" },
                { label: "Não", value: "no" },
              ]}
              suffixIcon={<InfoCircleOutlined style={{ color: "#007BFF" }} />}
            />
          </Tooltip>

          <Tooltip title="Consumo de álcool (CALC)" placement="top">
            <Select
              defaultValue={formData.CALC}
              onChange={(value) => handleChange(value, "CALC")}
              className="w-full rounded-md shadow-sm border border-gray-300"
              placeholder="CALC"
              options={[
                { label: "Às vezes", value: "Sometimes" },
                { label: "Frequentemente", value: "Frequently" },
                { label: "Sempre", value: "Always" },
                { label: "Não", value: "no" },
              ]}
              suffixIcon={<InfoCircleOutlined style={{ color: "#007BFF" }} />}
            />
          </Tooltip>

          <Tooltip title="Meio de transporte" placement="top">
            <Select
              defaultValue={formData.MTRANS}
              onChange={(value) => handleChange(value, "MTRANS")}
              className="w-full rounded-md shadow-sm border border-gray-300"
              placeholder="Meio de Transporte"
              options={[
                { label: "Transporte Público", value: "Public_Transportation" },
                { label: "Automóvel", value: "Automobile" },
                { label: "Caminhada", value: "Walking" },
                { label: "Moto", value: "Motorbike" },
                { label: "Bicicleta", value: "Bike" },
              ]}
              suffixIcon={<InfoCircleOutlined style={{ color: "#007BFF" }} />}
            />
          </Tooltip>

          <Button
            type="primary"
            icon={<CheckCircleOutlined />}
            className="w-full h-12 mt-6 text-lg font-semibold rounded-lg bg-blue-500 hover:bg-blue-600 text-white shadow-md"
          >
            Salvar Dados
          </Button>
        </div>
      </Card>

      <Space direction="vertical" className="mt-12 text-center">
        <SmileOutlined style={{ fontSize: "3rem", color: "#007BFF" }} />
        <Text className="text-md tracking-wide mt-2 text-gray-500">
          Pronto para monitorar sua saúde de forma inteligente.
        </Text>
      </Space>
    </div>
  );
}
