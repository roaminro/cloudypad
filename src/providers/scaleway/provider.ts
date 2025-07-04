import { InteractiveInstanceInitializer } from "../../cli/initializer"
import { CloudypadClient } from "../../core/client"
import { CLOUDYPAD_PROVIDER_SCALEWAY } from "../../core/const"
import { InstanceInitializer } from "../../core/initializer"
import { CommonConfigurationInputV1 } from "../../core/state/state"
import { ScalewayCreateCliArgs, ScalewayInputPrompter } from "./cli"
import { ScalewayProvisionInputV1 } from "./state"

export class ScalewayProviderClient {

    getInstanceInitializer(args: { coreClient: CloudypadClient }): InstanceInitializer<ScalewayProvisionInputV1, CommonConfigurationInputV1> {
        const initializer: InstanceInitializer<ScalewayProvisionInputV1, CommonConfigurationInputV1> = 
            args.coreClient.buildInstanceInitializer(CLOUDYPAD_PROVIDER_SCALEWAY)
        return initializer
    }
 
    getInteractiveInstanceInitializer(args: { coreClient: CloudypadClient, cliArgs: ScalewayCreateCliArgs })
        : InteractiveInstanceInitializer<ScalewayCreateCliArgs, ScalewayProvisionInputV1, CommonConfigurationInputV1> 
    {
        return new InteractiveInstanceInitializer<ScalewayCreateCliArgs, ScalewayProvisionInputV1, CommonConfigurationInputV1>({ 
            coreClient: args.coreClient,
            inputPrompter: new ScalewayInputPrompter({ coreClient: args.coreClient }),
            provider: CLOUDYPAD_PROVIDER_SCALEWAY,
            initArgs: args.cliArgs
        })
    }
}