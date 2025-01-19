import exams from '@/data/exams_data.json';

// Função para extrair o ano da data
export const getYear = (dateString) => {
    const date = new Date(dateString);
    return date.getFullYear();
};

export function countUniqueDataColeta() {
  const uniqueDataColeta = new Set(exams.map((exam) => exam.dataColeta));
  return uniqueDataColeta.size;
}

export function countUniqueExam() {
    const uniqueExam = new Set(exams.map((exam) => exam.categoria));
    return uniqueExam.size;
}

// Função para contar a quantidade de objetos com `resultado` diferente de `null`
export function countResults(resultado) {
    return exams.filter(exam => exam.resultado == resultado).length;
}

export function countNonNullResults() {
    return exams.filter(exam => exam.resultado !== null).length;
  }

// Função para contar a quantidade de exames com resultado "Alterado"
export function countAlteredResults() {
    const resultado = exams.filter(exam => exam.resultado === 'Alterado').length;
    console.log(resultado)
    return exams.filter(exam => exam.resultado === 'Alterado').length;
}

// Função para calcular a diferença em meses entre duas datas
function getMonthDifference(date1, date2) {
  return (
    (date2.getFullYear() - date1.getFullYear()) * 12 +
    date2.getMonth() - date1.getMonth()
  );
}

// Função para encontrar e ordenar datas únicas
export function getUniqueSortedDates() {
  const uniqueDates = [...new Set(exams.map(exam => exam.dataColeta))];

  uniqueDates.sort((a, b) => new Date(b) - new Date(a));

  return uniqueDates;
}

// Função para encontrar e ordenar datas únicas para uma categoria específica
export function getUniqueSortedDatesByCategory(category) {

  const filteredExams = exams.filter(exam => exam.categoria === category);
  const uniqueDates = [...new Set(filteredExams.map(exam => exam.dataColeta))];

  uniqueDates.sort((a, b) => new Date(b) - new Date(a));

  return uniqueDates;
}

// Função para obter dados filtrados por categoria
export function getDataByCategory(category) {
  const filteredExams = exams.filter(exam => exam.categoria === category);

  // Ordenar os exames pela data de coleta (mais antiga para mais recente)
  const sortedExams = filteredExams.sort((a, b) => new Date(a.dataColeta) - new Date(b.dataColeta));

  const data = sortedExams.map(exam => ({
    dataColeta: exam.dataColeta,
    valor: exam.valor,
    medida: exam.medida,
  }));

  return data;
}


export function getUniqueSortedCategoriesByGroup(group) {
  const filteredExams = exams.filter(exam => exam.group === group);
  let uniqueCategories = [...new Set(filteredExams.map(exam => exam.categoria))];

  if (group === "Funcao Renal") {
    uniqueCategories = uniqueCategories.filter(
      category => category !== "Glicose" && category !== "Proteína" && category !== "Cor"
    );
  }

  uniqueCategories.sort();

  return uniqueCategories;
}


// Função para calcular a média de tempo entre consultas em meses
export function calculateAverageTimeBetweenConsultations() {
  // Extrair datas únicas de coleta
  const uniqueDates = [...new Set(exams.map(exam => exam.dataColeta))]
    .map(date => new Date(date))
    .sort((a, b) => a - b);

  let totalMonths = 0;
  let count = 0;

  // Calcular a diferença de tempo entre as consultas
  for (let i = 1; i < uniqueDates.length; i++) {
    const date1 = uniqueDates[i - 1];
    const date2 = uniqueDates[i];
    const monthDifference = getMonthDifference(date1, date2);
    totalMonths += monthDifference;
    count++;
    console.log(`Date1: ${date1.toLocaleDateString()}, Date2: ${date2.toLocaleDateString()}, MonthDifference: ${monthDifference}`);
  }

  // Calcular a média das diferenças de tempo
  const averageMonths = count === 0 ? 0 : totalMonths / count;
  return averageMonths;
}

// Função para identificar o ano com o maior número de coletas
export function getYearWithMostCollections() {
    // Extrair anos das datas de coleta
    const years = exams.map(exam => new Date(exam.dataColeta).getFullYear());
  
    // Contar a frequência de cada ano
    const yearCounts = years.reduce((acc, year) => {
      acc[year] = (acc[year] || 0) + 1;
      return acc;
    }, {});
  
    // Identificar o ano com o maior número de coletas
    const maxYear = Object.keys(yearCounts).reduce((a, b) => yearCounts[a] > yearCounts[b] ? a : b);
  
    return maxYear;
  }

  // Função para retornar o exame mais recente
  export function getMostRecentExam() {
    // Ordenar os exames por dataColeta em ordem decrescente
    const sortedExams = exams.sort((a, b) => new Date(b.dataColeta) - new Date(a.dataColeta));
  
    // Selecionar o exame mais recente
    const mostRecentExam = sortedExams[0];
  
    // Retornar apenas as informações solicitadas
    return {
      nomeMedico: mostRecentExam.nomeMedico,
      convenio: mostRecentExam.convenio,
      dataColeta: mostRecentExam.dataColeta,
      dataEmissao: mostRecentExam.dataEmissao,
      laboratorio: mostRecentExam.laboratorio,
      numAtendimento: mostRecentExam.numAtendimento,
      estado: mostRecentExam.estado,
      pais: mostRecentExam.pais
    };
  }

  // Função para retornar os 5 exames com dataColeta mais recentes e diferentes
  export function getFiveMostRecentUniqueDateExams() {
    // Ordenar os exames por dataColeta em ordem decrescente
    const sortedExams = exams.sort((a, b) => new Date(b.dataColeta) - new Date(a.dataColeta));
  
    // Usar um Set para garantir datas únicas
    const uniqueDates = new Set();
    const recentExams = [];
  
    for (const exam of sortedExams) {
      if (!uniqueDates.has(exam.dataColeta)) {
        uniqueDates.add(exam.dataColeta);
        if (uniqueDates.size > 1) { // Ignorar o exame mais recente
            recentExams.push(exam);
            if (recentExams.length === 2) break;
        }
      }
    }

    console.log(recentExams)
  
    // Mapear os exames para retornar apenas as informações solicitadas
    return recentExams.map(exam => ({
      nomeMedico: exam.nomeMedico,
      convenio: exam.convenio,
      dataColeta: exam.dataColeta,
      laboratorio: exam.laboratorio,
      numAtendimento: exam.numAtendimento,
    }));
  }
  
// Função para calcular a média em porcentagem das diferenças entre exames para cada categoria
export function calculateCategoryVariation() {
    // Agrupar os exames por categoria
    const examsByCategory = exams.reduce((acc, exam) => {
      if (!acc[exam.categoria]) {
        acc[exam.categoria] = [];
      }
      acc[exam.categoria].push(exam);
      return acc;
    }, {});
  
    // Calcular a diferença em porcentagem entre os valores dos exames consecutivos para cada categoria
    const categoryVariations = Object.keys(examsByCategory).map(category => {
      const categoryExams = examsByCategory[category].sort((a, b) => new Date(a.dataColeta) - new Date(b.dataColeta));
      const differences = [];
  
      for (let i = 1; i < categoryExams.length; i++) {
        const previousValue = categoryExams[i - 1].valor;
        const currentValue = categoryExams[i].valor;
        const difference = ((currentValue - previousValue) / previousValue) * 100;
        differences.push(difference);
      }
  
      // Calcular a média das diferenças em porcentagem
      const averageDifference = differences.reduce((sum, diff) => sum + diff, 0) / differences.length;
  
      return {
        category,
        averageDifference: Math.abs(averageDifference), // Usando o valor absoluto para evitar diferenças negativas
      };
    });
  
    // Ordenar as categorias pelo valor da média das diferenças em porcentagem em ordem decrescente
    categoryVariations.sort((a, b) => b.averageDifference - a.averageDifference);

    console.log(categoryVariations)
  
    return categoryVariations;
  }

// Função para buscar exames com base em group, categoria e dataColeta (opcional)
export function getExamData(group, categoria, dataColeta) {
  // Filtrar os exames pelo group e categoria
  let filteredExams = exams.filter(exam => exam.group === group && exam.categoria === categoria);

  if (dataColeta) {
    // Se dataColeta estiver preenchida, filtrar pelo dataColeta
    filteredExams = filteredExams.filter(exam => exam.dataColeta === dataColeta);
  } else {
    // Se dataColeta for null, ordenar os exames pela dataColeta em ordem decrescente e pegar o mais recente
    filteredExams.sort((a, b) => new Date(b.dataColeta) - new Date(a.dataColeta));
  }

  // Pegar o exame mais recente ou o exame com a dataColeta especificada
  const exam = filteredExams[0];

  // Retornar o valor e a medida do exame, garantindo que valor seja um número e medida seja uma string
  return exam ? { valor: Number(exam.valor) || String(exam.valor), medida: exam.medida || '' , resultado: exam.resultado} : null;
}