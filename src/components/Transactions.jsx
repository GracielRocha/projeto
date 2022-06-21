import React from 'react';
import styles from './stylesModule'



const Transactions = ({list}) => {
    return (
        <div className='TransactionsCointainer'>
            <h4>Lista de transações</h4>
            {
                list.length? list.map(
                    (item) =>(
                <div key={item.id}className={styles.transactionline}>
                    <div className='transaction-name'><strong>{item.id}</strong></div>
                    <div className='transaction-name'>{item.name}</div>
                    <div className='transaction-value'>{item.converted}</div>
                    {":"}
                    <spam>{item.converted}</spam>

                </div>
                )
                ):(
                    <div>
                        <h5>
                            Lista de transações vazia
                        </h5>
                    </div>
                )
            }

        </div>
    )
}

export default Transactions;