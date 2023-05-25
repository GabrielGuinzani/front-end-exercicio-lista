import { useState } from "react";

const Lista = () => {
    const [formData, setFormData] = useState({
        item: ''
    });

    const [items, setItems] = useState([]);
    const [comprado, setComprado] = useState(false);

    const enviarFormulario = (event) => {
        event.preventDefault();

        if (formData.item === '') {
            alert('Insira um item');
            return;
        }

        setItems([...items, formData]);
    };

    const deletar = (item) => {
        var array = [...items]; 
        
        var index = array.indexOf(item);
        
        if (index !== -1) {
            array.splice(index, 1);
            setItems(array);
        }
    };

    return (
    <div>
        <form className="form-add-item" method="post" onSubmit={enviarFormulario}>
            <fieldset>
                <div className="form-group mb-3">
                    <label htmlFor="item">Adicionar Novo Item na Lista:</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="item" 
                        value={formData.item} 
                        onChange={(event) => setFormData({...formData, item: event.target.value })}/>
                </div>
                <button type="submit" className="btn btn-primary">
                    Adicionar
                </button>
            </fieldset>
        </form>
        
        <div className="lista-compras-container">
            <ul className="lista-items">
            {items.map((item) => (
                <li id={item.item} className={comprado ? "text-decoration-line-through" : null}>
                    <input type="checkbox" onClick={() => setComprado(!comprado)}/>
                    {item.item}
                    <button type="submit" className="btn btn-danger btn-lg" onClick={() => deletar(item)}>
                        Excluir
                    </button>
                </li>
            ))}
            </ul>
        </div>
    </div>
    );
};

export default Lista;