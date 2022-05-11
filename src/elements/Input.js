import styled from "styled-components";
import "./menu.css";


const Input = ({

    defaultValue,type,placeholder,disabled=false,

    onChange,onClick,_ref,ref,

    isTheme=false,
    id, label, name, value,


    hover,
    children,
    ...props

    
    }
    ) => {

        if(isTheme){
            if(type === 'select'){
                return (
                    <Wrap>
                        <Select
                        onChange={onChange}
                        ref={_ref}
                        placeholder={placeholder}
                        name={name}>
                            {children}
                        </Select>
                    </Wrap>
                )
            }
           
            if(type === 'textarea'){
                return(
                <Wrap>
                    <ThemeTextarea
                                disabled={disabled}
                                placeholder={placeholder}
                                defaultValue={defaultValue}
                                onChange={onChange}
                                onClick ={onClick}
                                ref={_ref}
                                style={{...props}}
                            />
                </Wrap>
                )
            }
            
            else{
                return(
                    
                        <ThemeInput
                            type={type}
                            onChange={onChange}
                            defaultValue={defaultValue}
                            ref={_ref}
                            placeholder={placeholder}
                            style={{...props}}
                        />
                    
                )
            }

    }


    return (
        <input type={type} onChange={onChange} ref={ref} placeholder={placeholder} defaultValue={defaultValue} style={ {...props}}/>
    );
}

const Wrap = styled.div`
`;

const ThemeInput = styled.input`
    border : 1.5px solid #9E9E9E;
    border-radius : 5px;
    
    width : 300px;
    height : 40px;
    padding : 15px;

    box-sizing: border-box;

    &:focus-visible{
        outline : none;
        border : 1.5px solid ${props => props.theme.mainTheme.primary};
    }
`;


const ThemeTextarea = styled.textarea`
    border : 1.5px solid #9E9E9E;
    border-radius : 5px;
    
    width : 300px;
    height : 40px;
    padding : 15px;
    

    box-sizing: border-box;
    resize: none;
    outline : none;

    &:focus-visible{
        & + div { display : block }
        border : 1.5px solid ${props => props.theme.mainTheme.primary};
    }
`;



const Select = styled.select`
    outline : none;
    appearance: none;
    width: 200px;
    height: 40px;
    border : 1.5px solid #9E9E9E;
    border-radius: 4px;
    box-sizing: border-box;

    background : url('/default_img/downArrow.jpg') calc(100% - 5px) center no-repeat;
    background-size: 20px;

    &:focus{

        border : 1.5px solid ${props => props.theme.mainTheme.primary};
    }
`;




export default Input;