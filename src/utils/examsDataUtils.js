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

// Função para contar a quantidade de objetos com `resultado` diferente de `null` e por grupo
export function countResultsByGroup(group, resultado) {
  if(group) {
    const filteredExams = exams.filter(exam => exam.group === group && exam.resultado === resultado);
    return filteredExams.length;
  } else {
    return exams.filter(exam => exam.resultado == resultado).length;
  }
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
  const uniqueDates = [...new Set(exams.map(exam => exam.dataColeta))]
    .map(date => new Date(date))
    .sort((a, b) => a - b);

  let totalMonths = 0;
  let count = 0;

  for (let i = 1; i < uniqueDates.length; i++) {
    const date1 = uniqueDates[i - 1];
    const date2 = uniqueDates[i];
    const monthDifference = getMonthDifference(date1, date2);
    totalMonths += monthDifference;
    count++;
    console.log(`Date1: ${date1.toLocaleDateString()}, Date2: ${date2.toLocaleDateString()}, MonthDifference: ${monthDifference}`);
  }

  const averageMonths = count === 0 ? 0 : totalMonths / count;
  return averageMonths;
}

// Função para identificar o ano com o maior número de coletas
export function getYearWithMostCollections() {
    const years = exams.map(exam => new Date(exam.dataColeta).getFullYear());
  
    const yearCounts = years.reduce((acc, year) => {
      acc[year] = (acc[year] || 0) + 1;
      return acc;
    }, {});
  
    const maxYear = Object.keys(yearCounts).reduce((a, b) => yearCounts[a] > yearCounts[b] ? a : b);
  
    return maxYear;
  }

  // Função para retornar o exame mais recente
  export function getMostRecentExam() {
    const sortedExams = exams.sort((a, b) => new Date(b.dataColeta) - new Date(a.dataColeta));
  
    const mostRecentExam = sortedExams[0];
  

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
    const sortedExams = exams.sort((a, b) => new Date(b.dataColeta) - new Date(a.dataColeta));

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
  
    return recentExams.map(exam => ({
      nomeMedico: exam.nomeMedico,
      convenio: exam.convenio,
      dataColeta: exam.dataColeta,
      laboratorio: exam.laboratorio,
      numAtendimento: exam.numAtendimento,
    }));
  }
  
// Função para calcular a média em porcentagem das diferenças entre exames para cada categoria
export function calculateCategoryVariation(group) {
  const filteredExams = group ? exams.filter(exam => exam.group === group) : exams;

  const filteredExamsByCategory = group === "Funcao Renal"
    ? filteredExams.filter(exam => exam.categoria !== "Proteína" && exam.categoria !== "Glicose" && exam.categoria !== "Cor")
    : filteredExams;

  const examsByCategory = filteredExamsByCategory.reduce((acc, exam) => {
    if (!acc[exam.categoria]) {
      acc[exam.categoria] = [];
    }
    acc[exam.categoria].push(exam);
    return acc;
  }, {});

  const categoryVariations = Object.keys(examsByCategory).map(category => {
    const categoryExams = examsByCategory[category].sort((a, b) => new Date(a.dataColeta) - new Date(b.dataColeta));
    const differences = [];

    for (let i = 1; i < categoryExams.length; i++) {
      const previousValue = parseFloat(categoryExams[i - 1].valor);
      const currentValue = parseFloat(categoryExams[i].valor);
      const difference = ((currentValue - previousValue) / previousValue) * 100;
      if (!isNaN(difference)) {
        differences.push(difference);
      }
    }

    const averageDifference = differences.reduce((sum, diff) => sum + diff, 0) / differences.length;

    return {
      category,
      averageDifference: Math.abs(averageDifference),
    };
  });

  categoryVariations.sort((a, b) => b.averageDifference - a.averageDifference);

  return categoryVariations;
}

// Função para buscar exames com base em group, categoria e dataColeta (opcional)
export function getExamData(group, categoria, dataColeta) {
  let filteredExams = exams.filter(exam => exam.group === group && exam.categoria === categoria);

  if (dataColeta) {
    filteredExams = filteredExams.filter(exam => exam.dataColeta === dataColeta);
  } else {
    filteredExams.sort((a, b) => new Date(b.dataColeta) - new Date(a.dataColeta));
  }

  const exam = filteredExams[0];

  return exam ? { valor: Number(exam.valor) || String(exam.valor), medida: exam.medida || '' , resultado: exam.resultado} : null;
}

export function filterExams (testName, categories) {
  return exams.filter(exam => exam.teste === testName && categories.includes(exam.categoria));
};