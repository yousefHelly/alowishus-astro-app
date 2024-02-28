import { RiFinanceShoppingBasket2Fill } from 'solid-icons/ri'

type Props = {}

export default function CartButton({}: Props) {
  return (
    <button class="btn-secondary bg-stone-50">
        <RiFinanceShoppingBasket2Fill />
    </button>
  )
}