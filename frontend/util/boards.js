export const getBoards = (userId) => {
    // debugger;
    return $.ajax({
        method: 'GET',
        url: `/api/users/${userId}/boards`
    })
};

export const getSingleBoard = boardId => (
    $.ajax({
        method: 'GET',
        url: `api/boards/${boardId}`
    })
);

export const createBoard = (board) => {
    return $.ajax({
        method: 'POST',
        url: '/api/boards',
        data: {board},
    });
};

export const updateBoard = board => {
    return $.ajax({
        url: `/api/boards/${board.id}`,
        method: 'patch',
        data: {board},
    });
};

export const deleteBoard = boardId => (
    $.ajax({
        url: `/api/boards/${boardId}/`,
        method: 'DELETE'
    })
)

export const repin = (board, pinId) => {
    // debugger;
    return $.ajax({
        url: `/api/boards/${board.id}/repin`,
        method: 'patch',
        data: { pin_id: pinId },
    });
};