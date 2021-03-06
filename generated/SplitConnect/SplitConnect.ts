// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class AddExpense extends ethereum.Event {
  get params(): AddExpense__Params {
    return new AddExpense__Params(this);
  }
}

export class AddExpense__Params {
  _event: AddExpense;

  constructor(event: AddExpense) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get description(): string {
    return this._event.parameters[2].value.toString();
  }
}

export class SplitConnect extends ethereum.SmartContract {
  static bind(address: Address): SplitConnect {
    return new SplitConnect("SplitConnect", address);
  }

  name(): string {
    let result = super.call("name", "name():(string)", []);

    return result[0].toString();
  }

  try_name(): ethereum.CallResult<string> {
    let result = super.tryCall("name", "name():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _name(): string {
    return this._call.inputValues[0].value.toString();
  }

  get _participants(): Array<Address> {
    return this._call.inputValues[1].value.toAddressArray();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class AddExpenseCall extends ethereum.Call {
  get inputs(): AddExpenseCall__Inputs {
    return new AddExpenseCall__Inputs(this);
  }

  get outputs(): AddExpenseCall__Outputs {
    return new AddExpenseCall__Outputs(this);
  }
}

export class AddExpenseCall__Inputs {
  _call: AddExpenseCall;

  constructor(call: AddExpenseCall) {
    this._call = call;
  }

  get description(): string {
    return this._call.inputValues[0].value.toString();
  }

  get amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class AddExpenseCall__Outputs {
  _call: AddExpenseCall;

  constructor(call: AddExpenseCall) {
    this._call = call;
  }
}
