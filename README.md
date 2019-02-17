# LightningService

 This service will take lightning invoices and pay them using opennode.co api.
 You will need your own API key from https://dev.opennode.co/ 

# Contents

- [Installation](#Installation)
- [Definitions](#Definitions)
  - [Events](#Events)
    - [invoicePaid](#invoicepaid)
  - [Tasks](#Tasks)
    - [payInvoice](#payinvoice)

# Installation

## MESG Core

This service requires [MESG Core](https://github.com/mesg-foundation/core) to be installed first.

You can install MESG Core by running the following command or [follow the installation guide](https://docs.mesg.com/guide/start-here/installation.html).

```bash
bash <(curl -fsSL https://mesg.com/install)
```

## Service

Download the source code of this service, and then in the service's folder, run the following command:
```bash
mesg-core service deploy
```

# Definitions

# Events

## invoicePaid

Event key: `invoicePaid`



| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |
| **success** | `success` | `Boolean` |  |

# Tasks

## payInvoice

Task key: `payInvoice`



### Inputs

| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |
| **apikey** | `apikey` | `String` |  |
| **invoice** | `invoice` | `String` |  |
| **invoiceId** | `invoiceId` | `String` |  |

### Outputs

#### error

Output key: `error`



| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |
| **error** | `error` | `String` |  |

#### success

Output key: `success`



| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |
| **message** | `message` | `String` |  |


