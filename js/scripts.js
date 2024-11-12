const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const toggleButton = document.getElementById('toggleSidebar');
const menuIcon = toggleButton.querySelector('i'); // Seleciona o ícone dentro do botão

// Função para abrir/fechar o menu
function toggleMenu() {
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
    
    // Alterna o ícone entre barras e X
    if (sidebar.classList.contains('active')) {
        menuIcon.classList.remove('fa-bars');
        menuIcon.classList.add('fa-times'); // ou 'fa-xmark' para versão mais recente do FontAwesome
    } else {
        menuIcon.classList.remove('fa-times'); // ou 'fa-xmark'
        menuIcon.classList.add('fa-bars');
    }
}

// Event listener para o botão do menu
toggleButton.addEventListener('click', function(e) {
    e.stopPropagation();
    toggleMenu();
});

// Event listener para o overlay
overlay.addEventListener('click', function() {
    toggleMenu();
});

// Event listener para fechar o menu quando clicar fora
document.addEventListener('click', function(e) {
    const isClickInside = sidebar.contains(e.target) || toggleButton.contains(e.target);
    
    if (!isClickInside && sidebar.classList.contains('active')) {
        toggleMenu();
    }
});

document.addEventListener('DOMContentLoaded', function() {
  // Dados de exemplo
  const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'];
  const candidatesData = [450, 520, 580, 620, 600, 618];
  const approvedData = [380, 420, 490, 550, 580, 618];
  const usersData = [520, 580, 600, 618, 590, 618];

  // Configuração de cores
  const colors = {
    candidates: '#FF7F50',
    approved: '#7B68EE',
    users: '#9370DB',
    // Cores adicionais para os gráficos de pizza
    status: ['#FF7F50', '#7B68EE', '#9370DB', '#4CAF50', '#FFC107'],
    category: ['#2196F3', '#E91E63', '#00BCD4', '#9C27B0', '#FF5722']
  };

  // Configuração global do Chart.js para texto branco
  const chartConfig = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: 'white'
        }
      }
    },
    scales: {
      x: {
        ticks: { color: 'white' },
        grid: { color: 'rgba(255, 255, 255, 0.1)' }
      },
      y: {
        ticks: { color: 'white' },
        grid: { color: 'rgba(255, 255, 255, 0.1)' }
      }
    }
  };

  // Configuração para gráficos de pizza
  const pieConfig = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right',
        labels: {
          color: 'white'
        }
      }
    }
  };

  // Gráfico de Pizza 1 - Status atual
  new Chart(document.getElementById('pieChart1'), {
    type: 'pie',
    data: {
      labels: ['Pendentes', 'Em Análise', 'Aprovados', 'Rejeitados', 'Em Revisão'],
      datasets: [{
        data: [30, 20, 25, 15, 10],
        backgroundColor: colors.status,
        borderWidth: 1,
        
      }]
    },
    options: {
      ...pieConfig,
      plugins: {
        ...pieConfig.plugins,
        title: {
          display: true,
          text: 'Status Atual',
          color: 'white',
          font: {
            size: 16
          }
        }
      }
    }
  });

  // Gráfico de Pizza 2 - Categorias
  new Chart(document.getElementById('pieChart2'), {
    type: 'doughnut',
    data: {
      labels: ['Categoria A', 'Categoria B', 'Categoria C', 'Categoria D', 'Outros'],
      datasets: [{
        data: [35, 25, 20, 15, 5],
        backgroundColor: colors.category,
        borderWidth: 2,
        
      }]
    },
    options: {
      ...pieConfig,
      plugins: {
        ...pieConfig.plugins,
        title: {
          display: true,
          text: 'Distribuição por Categoria',
          color: 'white',
          font: {
            size: 16
          }
        }
      }
    }
  });
  // Gráfico de Pizza 3 - Categorias
  new Chart(document.getElementById('pieChart3'), {
    type: 'polarArea',
    data: {
      labels: ['Categoria A', 'Categoria B', 'Categoria C', 'Categoria D', 'Outros'],
      datasets: [{
        data: [35, 25, 20, 15, 5],
        backgroundColor: colors.category,
        borderWidth: 2,
       // borderColor: '#2a2a2a'
      }]
    },
    options: {
      ...pieConfig,
      plugins: {
        ...pieConfig.plugins,
        title: {
          display: true,
          text: 'Distribuição por Categoria',
          color: 'white',
          font: {
            size: 16
          }
        }
      }
    }
  });

  // Gráfico de Crescimento
  new Chart(document.getElementById('growthChart'), {
    type: 'line',
    data: {
      labels: months,
      datasets: [
        {
          label: 'Candidatos',
          data: candidatesData,
          borderColor: colors.candidates,
          tension: 0.4,
          fill: false
        },
        {
          label: 'Aprovados',
          data: approvedData,
          borderColor: colors.approved,
          tension: 0.4,
          fill: false
        },
        {
          label: 'Usuários',
          data: usersData,
          borderColor: colors.users,
          tension: 0.4,
          fill: false
        }
      ]
    },
    options: chartConfig
  });
  new Chart(document.getElementById('eventChart'), {
    type: 'line',
    data: {
      labels: months,
      datasets: [
        {
          label: 'Candidatos',
          data: candidatesData,
          borderColor: colors.candidates,
          tension: 0.4,
          fill: false
        },
        {
          label: 'Aprovados',
          data: approvedData,
          borderColor: colors.approved,
          tension: 0.4,
          fill: false
        },
        {
          label: 'Usuários',
          data: usersData,
          borderColor: colors.users,
          tension: 0.4,
          fill: false
        }
      ]
    },
    options: chartConfig
  });

  // Gráfico de Distribuição
  new Chart(document.getElementById('distributionChart'), {
    type: 'bar',
    data: {
      labels: months,
      datasets: [
        {
          label: 'Candidatos',
          data: candidatesData,
          backgroundColor: colors.candidates
        },
        {
          label: 'Aprovados',
          data: approvedData,
          backgroundColor: colors.approved
        },
        {
          label: 'Usuários',
          data: usersData,
          backgroundColor: colors.users
        }
      ]
    },
    options: chartConfig
  });

  // Gráfico de Progresso
  new Chart(document.getElementById('progressChart'), {
    type: 'line',
    data: {
      labels: months,
      datasets: [
        {
          label: 'Candidatos',
          data: candidatesData,
          borderColor: colors.candidates,
          backgroundColor: `${colors.candidates}33`,
          fill: true,
          tension: 0.4
        },
        {
          label: 'Aprovados',
          data: approvedData,
          borderColor: colors.approved,
          backgroundColor: `${colors.approved}33`,
          fill: true,
          tension: 0.4
        },
        {
          label: 'Usuários',
          data: usersData,
          borderColor: colors.users,
          backgroundColor: `${colors.users}33`,
          fill: true,
          tension: 0.4
        }
      ]
    },
    options: chartConfig
  });
});