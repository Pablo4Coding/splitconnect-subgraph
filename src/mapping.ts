import { AddExpense as AddExpenseEvent } from "../generated/SplitConnect/SplitConnect"
import { AddExpense } from "../generated/schema"

export function handleAddExpense(event: AddExpenseEvent): void {
  let entity = new AddExpense(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.from = event.params.from
  entity.amount = event.params.amount
  entity.description = event.params.description
  entity.save()
}
