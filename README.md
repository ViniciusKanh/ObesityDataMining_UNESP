# ObesityDataMining_UNESP

Projeto de mineração de dados desenvolvido como parte de um estudo no programa de mestrado da UNESP, com foco na análise e predição de obesidade a partir de dados comportamentais, demográficos e de saúde.

## Descrição do Projeto

Este projeto explora técnicas de mineração de dados e aprendizado de máquina aplicadas a um conjunto de dados sobre obesidade. O objetivo principal é identificar padrões e construir modelos preditivos para classificação de níveis de obesidade. Foram testados vários algoritmos de classificação, com comparações de desempenho baseadas em métricas como acurácia, F1-score, precisão e recall.

## Estrutura do Repositório

- **notebooks/**: Contém os notebooks de pré-processamento, exploração e modelagem dos dados.
- **data/**: Diretório para armazenamento do dataset e dados tratados.
- **results/**: Armazena gráficos e relatórios gerados durante as análises.
- **requirements.txt**: Lista de pacotes e bibliotecas necessários para rodar o projeto.

## Tecnologias Utilizadas

- Python
- Pandas, NumPy
- Scikit-Learn
- Matplotlib, Seaborn
- Jupyter Notebook

## Estrutura do Dataset

O dataset utilizado contém atributos relevantes para a predição de obesidade, incluindo:
- **Variáveis Demográficas**: Idade, gênero.
- **Variáveis Comportamentais**: Consumo de alimentos, frequência de exercícios, uso de tecnologia.
- **Variáveis de Saúde**: Histórico familiar de obesidade, índice de massa corporal (IMC).

Para maiores detalhes sobre cada variável, consulte o notebook de exploração.

## Resultados e Conclusões

Os principais classificadores aplicados foram comparados utilizando métricas de desempenho como acurácia, F1-score, precisão e recall. Os melhores modelos identificados foram `HistGradientBoostingClassifier` e `StackingClassifier`, ambos alcançando alta precisão e adequação para a predição de obesidade.

## Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests para melhorias.
