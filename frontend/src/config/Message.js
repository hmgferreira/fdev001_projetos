import Swal from 'sweetalert2';

const Message = {
    success: (msg) => {
        Swal.fire(
            'Sucesso',
            msg,
            'success'
        );
    },
    error: (msg) => {
        Swal.fire(
            'Ops',
            msg,
            'error'
        );
    },
    info: (msg) => {
        Swal.fire(
            'Atenção',
            msg,
            'info'
        );
    },
    confirmation: (title, msg, callback) => {
        Swal.fire({
            title: title,
            text: msg,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sim',
            cancelButtonText: 'Não',
          }).then((result) => {
            if (result.isConfirmed) {
                callback();
                Swal.fire(
                    'Sucesso',
                    'Ação efetuada com sucesso',
                    'success'
                );
            }
        })
    }
};

export default Message;