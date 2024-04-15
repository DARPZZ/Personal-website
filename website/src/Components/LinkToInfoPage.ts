export function LinkToPage(project :any) {
    if(project.info === 'minesweeper'){window.location.hash ='/MineSweeperInfo'}
    else if (project.info === 'blackjack'){window.location.hash ='/BlackjackInfo'}
    else if(project.info === 'snake'){window.location.hash = '/SnakeInfo'}
    else if (project.info === 'NNTP'){window.location.hash = '/NNTPInfo'}
    else if(project.info === 'nameGuide'){window.location.hash = '/EasyBabyNames'}
    else if (project.info === 'sensor'){window.location.hash = '/SensorInfo'}
    else if(project.info ==='rockPaper'){window.location.hash = '/RockPaperInfo'}
}